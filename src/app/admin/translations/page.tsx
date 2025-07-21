'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeftIcon,
  CogIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  CheckIcon,
  XMarkIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import { 
  Translation, 
  TranslationCategory, 
  translationService, 
  TRANSLATION_CATEGORIES 
} from '@/lib/translations'
import AdminRoute from '@/components/AdminRoute'
import { useAuth } from '@/lib/auth'
import { useTranslation } from '@/lib/translations'
import LanguageToggle from '@/components/LanguageToggle'

function TranslationManagementContent() {
  const { user, logout } = useAuth()
  const { t } = useTranslation()
  const [translations, setTranslations] = useState<Translation[]>([])
  const [filteredTranslations, setFilteredTranslations] = useState<Translation[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Partial<Translation>>({})
  const [showAddForm, setShowAddForm] = useState(false)
  const [newTranslation, setNewTranslation] = useState<Partial<Translation>>({
    key: '',
    en: '',
    fr: '',
    category: 'common',
    context: ''
  })

  useEffect(() => {
    loadTranslations()
  }, [])

  useEffect(() => {
    filterTranslations()
  }, [translations, selectedCategory, searchTerm])

  const loadTranslations = () => {
    const allTranslations = translationService.getAllTranslations()
    setTranslations(allTranslations)
  }

  const filterTranslations = () => {
    let filtered = translations

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(t => t.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(t => 
        t.key.toLowerCase().includes(term) ||
        t.en.toLowerCase().includes(term) ||
        t.fr.toLowerCase().includes(term) ||
        (t.context && t.context.toLowerCase().includes(term))
      )
    }

    setFilteredTranslations(filtered)
  }

  const startEdit = (translation: Translation) => {
    setEditingId(translation.id)
    setEditForm(translation)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({})
  }

  const saveEdit = () => {
    if (editingId && editForm.key) {
      const success = translationService.updateTranslation(editForm.key, editForm)
      if (success) {
        loadTranslations()
        cancelEdit()
      }
    }
  }

  const deleteTranslation = (key: string) => {
    if (confirm(t('admin.confirmDelete', 'Êtes-vous sûr de vouloir supprimer cette traduction ?'))) {
      translationService.deleteTranslation(key)
      loadTranslations()
    }
  }

  const addNewTranslation = () => {
    if (newTranslation.key && newTranslation.en && newTranslation.fr && newTranslation.category) {
      translationService.addTranslation(newTranslation as Omit<Translation, 'id' | 'lastModified'>)
      setNewTranslation({
        key: '',
        en: '',
        fr: '',
        category: 'common',
        context: ''
      })
      setShowAddForm(false)
      loadTranslations()
    }
  }

  const exportTranslations = () => {
    const data = translationService.exportTranslations()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'translations.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importTranslations = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        const success = translationService.importTranslations(content)
        if (success) {
          loadTranslations()
          alert(t('admin.translationsImportedSuccess', 'Traductions importées avec succès!'))
        } else {
          alert(t('admin.translationsImportError', 'Erreur lors de l\'importation des traductions'))
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/ffgolf-logo.png" 
                  alt="FFGolf Logo" 
                  width={150} 
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
              <span className="ml-4 px-3 py-1 text-xs font-medium bg-purple-50 text-purple-800 rounded">
                Administration
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <span className="text-sm text-gray-600 hidden sm:block">
                {user?.name || 'Administrateur'}
              </span>
              <Link
                href="/admin"
                className="text-gray-600 hover:text-gray-900 p-1"
                title="Retour à l'administration"
              >
                <CogIcon className="h-6 w-6" />
              </Link>
              <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'AD'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/admin" className="inline-flex items-center text-sm text-ffgolf hover:text-ffgolf-800">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            {t('admin.returnToAdmin', 'Retour à l\'administration')}
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('admin.translationManagement', 'Gestion des Traductions')}</h1>
              <p className="text-gray-600">
                {t('admin.manageTranslationsFrench', 'Gérez les traductions français pour le système de compétitions golf')}
              </p>
            </div>
            <div className="flex gap-3">
              <label className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                <ArrowUpTrayIcon className="h-4 w-4 mr-2" />
                {t('action.import', 'Importer')}
                <input
                  type="file"
                  accept=".json"
                  onChange={importTranslations}
                  className="hidden"
                />
              </label>
              <button
                onClick={exportTranslations}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                {t('action.export', 'Exporter')}
              </button>
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                {t('action.newTranslation', 'Nouvelle Traduction')}
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="px-6 py-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('form.searchKeyTextContext', 'Rechercher clé, texte anglais, français ou contexte...')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <FunnelIcon className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                >
                  <option value="all">{t('form.allCategories', 'Toutes les catégories')}</option>
                  {TRANSLATION_CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              {filteredTranslations.length} {t('admin.translationsCount', 'traduction(s) sur')} {translations.length} {t('admin.total', 'total')}
            </div>
          </div>
        </div>

        {/* Add New Translation Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">{t('action.newTranslation', 'Nouvelle Traduction')}</h3>
            </div>
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.translationKey', 'Clé de traduction')} *
                  </label>
                  <input
                    type="text"
                    value={newTranslation.key || ''}
                    onChange={(e) => setNewTranslation({...newTranslation, key: e.target.value})}
                    placeholder={t('form.translationKeyExample', 'ex: nav.dashboard')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.category', 'Catégorie')} *
                  </label>
                  <select
                    value={newTranslation.category || 'common'}
                    onChange={(e) => setNewTranslation({...newTranslation, category: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                  >
                    {TRANSLATION_CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.englishText', 'Texte anglais')} *
                  </label>
                  <input
                    type="text"
                    value={newTranslation.en || ''}
                    onChange={(e) => setNewTranslation({...newTranslation, en: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.frenchTranslation', 'Traduction française')} *
                  </label>
                  <input
                    type="text"
                    value={newTranslation.fr || ''}
                    onChange={(e) => setNewTranslation({...newTranslation, fr: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.contextOptional', 'Contexte (optionnel)')}
                  </label>
                  <input
                    type="text"
                    value={newTranslation.context || ''}
                    onChange={(e) => setNewTranslation({...newTranslation, context: e.target.value})}
                    placeholder={t('form.contextDescription', 'Description du contexte d\'utilisation')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={addNewTranslation}
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700"
                >
                  <CheckIcon className="h-4 w-4 inline mr-1" />
                  {t('action.add', 'Ajouter')}
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700"
                >
                  <XMarkIcon className="h-4 w-4 inline mr-1" />
                  {t('action.cancel', 'Annuler')}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Translations Table */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{t('admin.translations', 'Traductions')}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('form.key', 'Clé')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('form.category', 'Catégorie')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('form.english', 'Anglais')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('form.french', 'Français')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('form.context', 'Contexte')}
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('common.actions', 'Actions')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTranslations.map((translation) => (
                  <tr key={translation.id} className="hover:bg-gray-50">
                    {editingId === translation.id ? (
                      // Edit mode
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                          <input
                            type="text"
                            value={editForm.key || ''}
                            onChange={(e) => setEditForm({...editForm, key: e.target.value})}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={editForm.category || ''}
                            onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                          >
                            {TRANSLATION_CATEGORIES.map(cat => (
                              <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={editForm.en || ''}
                            onChange={(e) => setEditForm({...editForm, en: e.target.value})}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={editForm.fr || ''}
                            onChange={(e) => setEditForm({...editForm, fr: e.target.value})}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={editForm.context || ''}
                            onChange={(e) => setEditForm({...editForm, context: e.target.value})}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={saveEdit}
                              className="text-green-600 hover:text-green-900"
                            >
                              <CheckIcon className="h-4 w-4" />
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              <XMarkIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      // View mode
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                          {translation.key}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                            {TRANSLATION_CATEGORIES.find(c => c.id === translation.category)?.name || translation.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {translation.en}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {translation.fr}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {translation.context}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => startEdit(translation)}
                              className="text-ffgolf hover:text-ffgolf-800"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => deleteTranslation(translation.key)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TranslationManagementPage() {
  return (
    <AdminRoute>
      <TranslationManagementContent />
    </AdminRoute>
  )
}
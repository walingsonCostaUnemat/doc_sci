import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { SectionPage } from '@/pages/SectionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Parte I - Fundamentos */}
          <Route path="parte-i" element={<SectionPage />} />
          <Route path="parte-i/:sectionId" element={<SectionPage />} />

          {/* Parte II - Estrutura */}
          <Route path="parte-ii" element={<SectionPage />} />
          <Route path="parte-ii/:sectionId" element={<SectionPage />} />

          {/* Parte III - CBMMT */}
          <Route path="parte-iii" element={<SectionPage />} />
          <Route path="parte-iii/:sectionId" element={<SectionPage />} />

          {/* Parte IV - Fluxo Operacional */}
          <Route path="parte-iv" element={<SectionPage />} />
          <Route path="parte-iv/:sectionId" element={<SectionPage />} />

          {/* Parte V - Ciclo P */}
          <Route path="parte-v" element={<SectionPage />} />
          <Route path="parte-v/:sectionId" element={<SectionPage />} />

          {/* Parte VI - Desmobilizacao */}
          <Route path="parte-vi" element={<SectionPage />} />
          <Route path="parte-vi/:sectionId" element={<SectionPage />} />

          {/* Parte VII - Formularios */}
          <Route path="parte-vii" element={<SectionPage />} />
          <Route path="parte-vii/:sectionId" element={<SectionPage />} />

          {/* Parte VIII - Requisitos */}
          <Route path="parte-viii" element={<SectionPage />} />
          <Route path="parte-viii/:sectionId" element={<SectionPage />} />

          {/* Recursos */}
          <Route path="recursos" element={<SectionPage />} />
          <Route path="recursos/:sectionId" element={<SectionPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NotFoundPage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-gray-600 dark:text-gray-400">Pagina nao encontrada</p>
    </div>
  );
}

export default App;

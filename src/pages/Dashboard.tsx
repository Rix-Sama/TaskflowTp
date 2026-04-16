import { useState } from 'react';
import useProjects from '../hooks/useProjects';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
import ProjectForm from '../components/ProjectForm';

export default function Dashboard() {
const { projects, columns, loading, error, addProject, renameProject, deleteProject }
= useProjects();
const [sidebarOpen, setSidebarOpen] = useState(true);

const [showForm, setShowForm] = useState(false);
// SUPPRIMÉ : useState<Project[]>, useState<Column[]>, useState loading
// SUPPRIMÉ : useEffect fetch
// SUPPRIMÉ : addProject, renameProject, deleteProject (dans le hook maintenant)

if (loading) return <div>Chargement...</div>;
if (error) return <div>Erreur: {error}</div>;

return (
<div className="dashboard">
<Header 
title="Taskflow"
onMenuClick={() => setSidebarOpen(!sidebarOpen)}
/>
<Sidebar projects={projects} isOpen={sidebarOpen} />
<MainContent columns={columns} />
{showForm && (
<ProjectForm
onSubmit={(name, color) => {
addProject(name, color);
setShowForm(false);
}}
onCancel={() => setShowForm(false)}
submitLabel="Créer"
/>
)}
</div>
);
}
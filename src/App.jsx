import { useState } from "react";
import logo from "./assets/no-projects.png";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [newProject, setNewProject] = useState(false);

  let people = [];



  const handleNewProject = () => {
    setNewProject((prevState) => !prevState);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setNewProject(false);
  };


  const noProject = (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={logo}
        alt="Notepad icon"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        Create new project
      </button>
    </div>
  );


  return (
    <main className="h-screen my-8 flex gap-8">
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          YOUR PROJECTS
        </h2>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={handleNewProject}
        >
          + Add Project
        </button>
      </aside>

      {!newProject && noProject}
      {newProject && <ProjectForm onCancel={handleCancel}/>}
    </main>
  );
}

export default App;

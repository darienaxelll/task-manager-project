const ProjectForm = () => {
  return (
    <form>
      <button className="text-stone-800 hover:text-stone-950">Cancel</button>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        Save
      </button>
      <label
        htmlFor="title"
        className="text-sm font-bold uppercase text-stone-500"
      >
        <p className="flex flex-col gap-1 my-4">TITLE</p>
      </label>
      <input
        id="title"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <label
        htmlFor="description"
        className="text-sm font-bold uppercase text-stone-500"
      >
        <p className="flex flex-col gap-1 my-4">DESCRIPTION</p>
      </label>
      <input
        id="description"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <label
        htmlFor="date"
        className="text-sm font-bold uppercase text-stone-500"
      >
        <p className="flex flex-col gap-1 my-4">DUE DATE</p>
      </label>
      <input
        id="date"
        type="date"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </form>
  );
};

export default ProjectForm;

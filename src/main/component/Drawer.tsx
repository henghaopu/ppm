// todo: support mobile
function Drawer({ utilFileNames }: { utilFileNames: string[] }) {
  return (
    <div className="bg-base-200">
      <ul className="menu p-4 overflow-y-auto w-80 text-base-content h-full">
        <li className="menu-title">
          <span>Programming Notes</span>
        </li>
        {utilFileNames.map((fileName) => (
          <li key={fileName} className="hover-bordered">
            <a href={`#${fileName}`}>{fileName}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Drawer

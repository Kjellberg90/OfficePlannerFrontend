const Startpage = () => {
    return (
        <div className="startpageContainer">
          <a href="/groups">
            <div className="selectionBox">
                <h2 className="boxTextStartPage">Groups</h2>
            </div>
          </a>
          <a href="/rooms">
            <div className="selectionBox">
              <h3 className="boxTextStartPage">Rooms</h3>
            </div>
          </a>
        </div>
    )
}

export default Startpage;
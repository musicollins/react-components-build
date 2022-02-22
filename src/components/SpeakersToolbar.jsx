export default function SpeakersToolbar(props) {
  //Destructure props

  const {sessionState, theme, toggleSessions, setTheme} = props;
  //const [showSessions, setShowSessions] = useState(true);
  //const [theme, setTheme] = useState("light")

  function handleShowSessions(e) {
    //Changes the component state when the checkbox input is toggled
    //Toggles the checked attribute of the input (type=>checkbox)
    setShowSessions(e.target.checked);
  }
  function handleShowTheme(e) {
    //Changes the component state when the dropdown label tag
    console.log(e.target.value)
    setTheme(e.target.value);
  }

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={sessionState}
                  onChange={(e) => toggleSessions(e.target.checked)}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select className="form-control theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

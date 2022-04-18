import { SyntheticEvent, useEffect, useRef } from 'react'

const ToggleButton = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = (e: SyntheticEvent<HTMLLabelElement>) => {
    e.preventDefault()

    if (!inputRef.current) return

    inputRef.current.checked = !inputRef.current.checked

    if (inputRef.current.checked) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    if (!inputRef.current) return

    if (localStorage.getItem('theme') === 'dark')
      inputRef.current.checked = true
    else inputRef.current.checked = false
  }, [])

  return (
    <div className="toggle-theme__wrapper">
      <span className="toggle-theme__heading">Light</span>
      <label
        onClick={handleClick}
        className="toggle-theme__label"
        htmlFor="theme-toggle">
        <span className="sr-only">Toggle Theme</span>

        <input
          ref={inputRef}
          type="checkbox"
          id="theme-toggle"
          style={{ pointerEvents: 'none' }}
        />
        <div className="toggle-theme__bg"></div>
      </label>
      <span className="toggle-theme__heading">Dark</span>
    </div>
  )
}

export default ToggleButton

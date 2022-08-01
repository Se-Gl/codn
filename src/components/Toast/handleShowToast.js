export const handleShowToast = (type, title, content, setToastList) => {
  const newToast = {
    id: new Date().getTime(),
    type,
    title,
    content
  }
  setToastList((prevState) => [...prevState, newToast])
}

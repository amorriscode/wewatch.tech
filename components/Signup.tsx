const Footer = () => {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/weubc"
      method="post"
      target="popupwindow"
      onSubmit={() => window.open('https://buttondown.email/weubc', 'popupwindow')}
      className="font-bold text-xl md:text-2xl"
    >
      <label htmlFor="bd-email">Subscribe to get the latest wisdom bomb in your inbox</label>

      <div className="mb-2 w-full">
        <input type="email" name="email" id="bd-email" placeholder="elon@spaceX.com" className="w-2/3 p-4 border-2 rounded-bl-lg border-black"></input>
        <input type="hidden" value="1" name="embed"></input>
        <input type="submit" value="Subscribe" className="w-1/3 p-4 bg-black border-2 border-black rounded-br-lg text-white font-bold"></input>
      </div>

      <p className="text-xs">
        <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
      </p>
    </form>
  )
}

export default Footer

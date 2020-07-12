import Container from './Container'

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-300">
      <Container>
        <div className="py-10 md:py-20">
          <h3 className="text-4xl lg:text-5xl font-bold">
            Have you seen a great talk? <a className="link" href="mailto:anthony@amorrissound.com">Let me know!</a>
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

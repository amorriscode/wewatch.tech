import Container from './Container'
import Signup from './Signup'

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-300">
      <Container>
        <div className="py-10 md:py-20 space-y-4">
          <h3 className="text-4xl lg:text-5xl font-bold">
            Have you seen a great talk? <a className="link" href="mailto:anthony@amorrissound.com">Let me know!</a>
          </h3>

          <Signup />
        </div>
      </Container>
    </footer>
  )
}

export default Footer

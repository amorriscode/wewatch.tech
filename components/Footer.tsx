import Container from './Container'
import Signup from './Signup'

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-300">
      <Container>
        <div className="py-10 md:py-20 space-y-12">
          <h3 className="text-4xl lg:text-5xl font-bold">
           What do YOU want to hear more of? {' '}
            <a className="link" href="mailto:azhao991@gmail.com">
                Let me know!
            </a>
          </h3>

          <Signup />
        </div>
      </Container>
    </footer>
  )
}

export default Footer

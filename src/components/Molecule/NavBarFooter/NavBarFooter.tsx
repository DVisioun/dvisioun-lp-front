import React from 'react'

export const NavBarFooter = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex gap-8 justify-center">
                <img src="/images/footer/logo.svg" className="h-8 me-3" alt="Logo" />
          </div>
          <div className="flex gap-8 justify-center">
              <div>
                  <ul className="text-gray-500 text-center dark:text-gray-400 xs">
                      <li>
                          <a href="#home" className="hover:underline hover:text-primary-blue">Home</a>
                      </li>
                      <li>
                          <a href="#services" className="hover:underline hover:text-primary-blue">Serviços</a>
                      </li>
                      <li>
                          <a href="#about" className="hover:underline hover:text-primary-blue">Sobre nós</a>
                      </li>
                      <li>
                          <a href="#contact" className="hover:underline hover:text-primary-blue">Contato</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

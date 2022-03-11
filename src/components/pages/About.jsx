function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        is a replica project by
        <a href='https://github.com/RishabaPriyan'>
          {' '}
          <strong>
            Rishaba Priyan
          </strong>
          {' '}
          
        </a>
        ,which is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-500'>
        Version <span className='text-gray-400'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-500'>
        Layout By:
        <a className='text-gray-400' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
    </>
  )
}

export default About
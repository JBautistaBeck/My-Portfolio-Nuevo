import fotoPerfil from "../utils/foto-perfil.jpeg"

function About() {

    const aboutMeText1 = "¡Hola! 👋🏼 Soy Juan Bautista María Beck, un estudiante avanzado en Administración de Empresas con una gran pasión por la programación. Durante mi recorrido universitario, mi incesante curiosidad por el mundo de la programación me impulsó a dar un paso al frente. Inicié mi formación en programación en Soy Henry y desde entonces, me he sumergido de lleno en el fascinante universo tecnológico. En la actualidad, me encuentro en constante exploración de nuevas tecnologías y mantengo al día con las últimas tendencias."

    return (
      <div className="bg-gradient-to-r from-mantis-400 to-mantis-700 pt-10 pb-10 pr-10 h-full sm:h-screen">

        <div className=" flex flex-col sm:flex-row items-center sm:mt-10">

            <div className=' sm:w-1/3 mt-4'>
                <img className='  rounded-r-full sm:rounded-r-full mx-auto mt-8 mb-4 ' src={fotoPerfil} alt='FotoPerfil'></img>
            </div>
                
            <div className='sm:w-2/3 ml-8'>
                <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
                <p className=' text-base sm:text-lg mb-10'>{aboutMeText1}</p>

                <a href='https://docs.google.com/document/d/11-ACxx88UTeenLH1yS40QdkM-7Y5Uk-5AFdoxkhnGt4/edit' target="_blank" rel="noopener noreferrer"><button className='text-black px-4 py-2 rounded border border-black hover:bg-gray-950 hover:text-gray-200 block'>Curriculum Vitae</button></a>

            </div>
        </div>
      </div>
    );
  }
  
export default About;
import { Link, Redirect } from 'react-router-dom'
import { useScene } from '../hooks/story'

const Layer = ({ className, ...props }) => (
  <div className={`${className || ''} absolute inset-0`} {...props} />
)

const Wrap = ({ match: { params: { id } } }) => {
  const scene = useScene(id)

  if (!scene) return <Redirect to="/scenes/1" />

  return <Scene scene={scene} />
}

const Scene = ({ scene }) => {
  const {
    character,
    message,
    actions
  } = scene
  console.log(scene)

  return (
    <>
      <div className="fixed inset-0">
        <Layer className="flex items-center justify-center">
          <div className="text-9xl">{character}</div>
        </Layer>
      </div>
      <div className="fixed bottom-0 left-0 right-0 pb-2">
          <div className="absolute bg-white opacity-50" />
          <div className="max-w-2xl mx-auto relative">
            <div className="mx-2 border-2 mb-2 px-2 py-3">
              {message}
            </div>
            {actions.length > 0 && (
            <div className="flex px-1 flex-wrap">
              {actions.map(({ to, label }, i) => (
                <div className="w-1/2 p-1" key={i}>
                  <Link to={`/scenes/${to}`} className="block bg-gray-200 p-3 rounded w-full">{label}</Link>
                </div>
              ))}
            </div>
            )}
          </div>
      </div>
    </>
  )
}

export default Wrap

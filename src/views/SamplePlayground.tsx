import React, {
  useState,
  useMemo,
  useLayoutEffect,
  HTMLAttributes,
} from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core'

const SamplePlayground: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}): JSX.Element => {
  const [canvasNode, setCanvasNode] = useState<HTMLCanvasElement | undefined>()

  const updateCanvasDimensions = () => {
    if (canvasNode && canvasNode.parentElement) {
      canvasNode.width = canvasNode.parentElement.clientWidth
      canvasNode.height = canvasNode.parentElement.clientHeight
      canvasNode.style.width = `${canvasNode.width}px`
      canvasNode.style.height = `${canvasNode.height}px`
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updateCanvasDimensions)
    updateCanvasDimensions()
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions)
    }
  })

  return useMemo(
    () => (
      <div {...props}>
        <Engine canvasId="sample-canvas">
          <Scene
            onSceneMount={(e) => {
              setCanvasNode(e.canvas)
            }}
          >
            <freeCamera
              name="camera1"
              position={new Vector3(0, 5, -10)}
              target={Vector3.Zero()}
            />
            <hemisphericLight
              name="light1"
              intensity={0.7}
              direction={Vector3.Up()}
            />
            <sphere
              name="sphere1"
              diameter={2}
              segments={16}
              position={new Vector3(0, 1, 0)}
            />
            <ground name="ground1" width={6} height={6} subdivisions={2} />
          </Scene>
        </Engine>
      </div>
    ),
    []
  )
}

export { SamplePlayground }

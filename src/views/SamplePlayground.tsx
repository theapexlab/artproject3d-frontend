import React, {
  useState,
  useMemo,
  useLayoutEffect,
  HTMLAttributes,
} from 'react'
import 'babylonjs-loaders'
import * as BABYLON from '@babylonjs/core'

import '@babylonjs/loaders/OBJ'
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
            <ground name="ground1" width={10} height={10} subdivisions={3} />
            <box
              name="fal1"
              width={10}
              height={5}
              depth={1}
              position={new Vector3(0, 2.5, 5)}
            />
            <box
              name="fal2"
              width={10}
              height={5}
              position={new Vector3(-5, 2.5, 0)}
              rotation={new Vector3(0, Math.PI / 2)}
            />
            <box
              name="fal3"
              width={10}
              height={5}
              position={new Vector3(5, 2.5, 0)}
              rotation={new Vector3(0, Math.PI / 2)}
            />
            <box
              name="fal4"
              width={10}
              height={5}
              depth={1}
              position={new Vector3(0, 2.5, -5)}
            />
          </Scene>
        </Engine>
      </div>
    ),
    []
  )
}

export { SamplePlayground }

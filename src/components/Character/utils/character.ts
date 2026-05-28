import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      try {
        let character: THREE.Object3D;
        
        // Mapped to your new custom Ready Player Me GLB avatar
        loader.load(
          "/models/my_avatar.glb",
          async (gltf) => {
            character = gltf.scene;
            
            // Scale and position the character to make it prominently visible and centered
            character.scale.set(7.8, 7.8, 7.8);
            character.position.set(0, -0.5, 0);
            

            
            await renderer.compileAsync(character, camera, scene);
            
             character.traverse((child: any) => {
              if (child.isMesh) {
                // Enabled shadows for your custom 3D model
                child.castShadow = true;
                child.receiveShadow = true;
                child.frustumCulled = false; // Disable frustum culling to prevent sudden clipping
              }
            });
            
            resolve(gltf);
            
            // Connect to mouse hover and scroll timeline managers
            setCharTimeline(character, camera);
            setAllTimeline();
            
            // Standard Ready Player Me skeletal joints alignment - disabled to prevent leg distortion on standing rig
            // const footR = character.getObjectByName("RightFoot") || character.getObjectByName("footR");
            // const footL = character.getObjectByName("LeftFoot") || character.getObjectByName("footL");
            // if (footR) footR.position.y = 3.36;
            // if (footL) footL.position.y = 3.36;

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading custom GLTF avatar:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import "../styles/index.css"

const HeartScene = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, heartModel;

        const initScene = () => {
            // Scene setup
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(renderer.domElement);

            // Load 3D model
            const loader = new GLTFLoader();
            loader.load('../../hearts.glb', (gltf) => {
                heartModel = gltf.scene;
                scene.add(heartModel);

                

                // Adjust camera position and rotation
                camera.position.set(200, 0, 20); // Move the camera further away from the model
                camera.lookAt(heartModel.position); // Look at the model
                
                 // Move the model to the right
                 heartModel.position.x = 170;

                 
                // Rotate the model slightly along the x-axis to add depth
                heartModel.rotation.x = Math.PI / 2;
                


                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color, Intensity
                scene.add(ambientLight);

                // Add directional light
                const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Color, Intensity
                directionalLight.position.set(0, 1, 1);
                scene.add(directionalLight);

                // Add point light at the object's position
                const pointLight = new THREE.PointLight(0xffffff, 5, 10); // Color, Intensity, Distance
                pointLight.position.copy(heartModel.position);
                scene.add(pointLight);

                // Render loop
                const animate = () => {
                    requestAnimationFrame(animate);
                    // Rotate the heart model
                   heartModel.rotation.z += 0.01;
                    renderer.render(scene, camera);
                };
                animate();
            });
        };

        initScene();

        return () => {
            // Clean up
            if (renderer) {
                renderer.dispose();
            }
        };
    }, []);

    return <div class="heartscene" ref={containerRef} ></div > 
};

export default HeartScene;

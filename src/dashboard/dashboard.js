// Import necessary libraries
import * as THREE from 'three';
import { io } from 'socket.io-client';

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a simple cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Initialize WebSocket connection
const socket = io('http://localhost:3000');

// Chat interface elements
const chatInput = document.createElement('input');
chatInput.type = 'text';
chatInput.placeholder = 'Type a message...';
const chatButton = document.createElement('button');
chatButton.textContent = 'Send';
const chatDisplay = document.getElementById('chat-interface');

chatDisplay.appendChild(chatInput);
chatDisplay.appendChild(chatButton);

// Send message to server
chatButton.addEventListener('click', () => {
    const message = chatInput.value;
    if (message) {
        socket.emit('chat message', message);
        chatInput.value = '';
    }
});

// Receive message from server
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
});
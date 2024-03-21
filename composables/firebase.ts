// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getStorage,
	ref,
	uploadString,
	getDownloadURL,
	getMetadata
} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDM1Yt8D6jopXZ-Uw9gAnf9jNgb6XHnXo8',
	authDomain: 'atommuse-storage.firebaseapp.com',
	projectId: 'atommuse-storage',
	storageBucket: 'atommuse-storage.appspot.com',
	messagingSenderId: '794119511988',
	appId: '1:794119511988:web:6e95770532d76c1db71ce1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export const saveFile = async (fullPath, file) => {
	// Create a storage reference from our storage service
	const storageRef = ref(storage, fullPath)
	const snapshot = await uploadString(storageRef, file, 'data_url')
	if (snapshot) {
		const dowloadUrl = await getDownloadURL(snapshot.ref)
		const metadata = await getMetadata(storageRef)
		return { snapshot, dowloadUrl, metadata }
	}
}

export const uploadFile = async (file) => {
	return await new Promise(function (resolve, reject) {
		var reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = async (e) => {
			const result = reader.result
			const { snapshot, dowloadUrl, metadata } = await saveFile(
				'images/' + file.name,
				result
			)

			if (snapshot) {
				resolve({ snapshot, dowloadUrl, metadata })
			} else {
				reject()
			}
		}
	})
}

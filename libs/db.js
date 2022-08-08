import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBi3JTR-hsKQVd80S2B_VG3Lls1OmgLKiQ",
  authDomain: "quimicos-a9338.firebaseapp.com",
  projectId: "quimicos-a9338",
  storageBucket: "quimicos-a9338.appspot.com",
  messagingSenderId: "307023627186",
  appId: "1:307023627186:web:d842cd3d6acff684311aab",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const usersRef = collection(database, "users");
const postsRef = collection(database, "posts");
const productsRef = collection(database, "products");
class DB {
  async getUsers() {
    const querySnapshot = await getDocs(usersRef);
    const data = querySnapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return data;
  }
  async getPosts() {
    const querySnapshot = await getDocs(postsRef);
    const data = querySnapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return data;
  }
  async getProducts() {
    const querySnapshot = await getDocs(usersRef);
    const data = querySnapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return data;
  }
  async getProduct(id) {
    const docRef = doc(database, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return {data: "Error"};
    }
  }
}
const db = new DB();
export { db };

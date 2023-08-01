import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionSnapshots, updateDoc, doc, setDoc, deleteDoc, query, where, getDoc, getDocs } from "@angular/fire/firestore"
import {item} from "src/app/model/item.model"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: Firestore) {
    this.getData();
    // this.deleteItemByItemID('11111')
    // this.AddListItems()
  }
  cart: item[] = [];
  itemList: item[] = [];
  originalItemList: item[] = [
    {
      id: 1,
      name: 'Bao Cao Su Durex Invinsible Extra Thin, Extra Lubricated',
      boxSize: 10,
      description: '',
      inStock: 15,
      price: 19,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/Durex_Invisible_ExtraLube_10pk-new1_f2534b7d-656d-4c8e-9ab3-18c0736739e4_540x.png?v=1624867686',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Bao Cao Su Durex Invisible Extra Thin Extra Sensitive',
      boxSize: 10,
      description: '',
      inStock: 15,
      price: 20,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Invisible_ExtraThin_10pk_new1_bd427760-ad73-4652-b472-3254c012d534_540x.png?v=1592438119',
      quantity: 0,
    },
    {
      id: 3,
      name: 'Bao Cao Su Durex Invisible Extra Thin Extra Sensitive',
      boxSize: 3,
      description: '',
      inStock: 15,
      price: 21,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Invisible_ExtraSensitive_3pk_RBL1912482_Front_VIETNAM_v1_0f21e136-35d9-4f6e-8f44-31f34cea2325_540x.jpg?v=1592438128',
      quantity: 0,
    },
    {
      id: 4,
      name: 'Bao cao su Durex Fetherlite Ultima',
      boxSize: 3,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_Fetherlite_Ultima_12pk_new1_1f746025-809f-46ff-9717-e5e5ede2a3fc_540x.png?v=1592438130',
      inStock: 5,
      price: 40,
      description: '',
      quantity: 0,
    },
    {
      id: 5,
      name: 'Bao Cao Su Durex Fetherlite Ultima',
      boxSize: 3,
      price: 50,
      inStock: 5,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_FetherliteUltima_3pk_5038483492901_Front_Vietnam_540x.jpg?v=1592438125',
      description:'',
      quantity: 0,
    },
    {
      id: 6,
      boxSize: 12,
      quantity: 0,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_Fetherlite_12pk_new_a6c373bc-5c8a-4782-9fc9-128f109b5a8e_540x.png?v=1592438125',
      name: 'Bao Cao Su Durex Fetherlite',
      price: 60,
      description: '',
      inStock: 20
    },
    {
      id: 7,
      quantity: 0,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_Fetherlite_3pk_8850163000100_Front_Vietnam_1280x.jpg?v=1592438116',
      name: 'Bao Cao Su Durex Fetherlite',
      price: 45,
      inStock: 5,
      boxSize: 3,
      description:''
    },
    {
      id: 8,
      quantity: 0,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Performance_Performa_12pk_new_1049x.png?v=1592438107',
      name: 'Bao Cao Su Durex Performa',
      price: 45,
      description:'',
      inStock: 100,
      boxSize: 12
    },
    {
      id: 9,
      quantity: 0,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Performance_Performa_3pk_RBL1913553_Front_VIETNAM_1280x.jpg?v=1592438107',
      name: 'Bao Cao Su Durex Performa',
      price: 45,
      description:'',
      inStock: 20,
      boxSize: 3,
    },
    {
      id: 10,
      quantity: 0,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Pleasuremax_12pk_new1_ef4889c4-ffdd-485c-8d95-960bc4c40607_1049x.png?v=1592438108',
      name: 'Bao Cao Su Durex Pleasuremax',
      price: 60,
      description:'',
      inStock: 1,
      boxSize: 12,
    },
    {
      id: 11,
      quantity: 0,
      image:
        'https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Kingtex_12pk_new1_5f843d2c-d189-41e5-a816-51bd7a04529e_1049x.png?v=1592438154',
      name: 'Bao Cao Su Durex Kingtex',
      price: 45,
      description:'',
      boxSize: 12,
      inStock: 10,
    },
  ];

  itemCollection = collection(this.firestore, 'fbItemList');
  
  //ADD ALL LIST ITEM TO FIREBASE

  async resetItemList() {
    let index = 0;
    let noteRef = this.itemCollection;
    for(let item of this.originalItemList) {
      // await addDoc(this.itemCollection, item)
      await setDoc(doc(this.itemCollection,index.toString()), item);
      index ++;
    }
  }

  //read
  getData(){
    collectionSnapshots(this.itemCollection).subscribe((snapshot) => {
      let result = snapshot.map((doc)=> doc.data());
      let sortList = [];
      sortList = result as item[];

      for(let i=0;i<sortList.length;i++){
        for(let j = i+1; j<sortList.length-1;j++){
          if (sortList[j].id<sortList[i].id)
          {
            let temp = sortList[i];
            sortList[i] = sortList[j];
            sortList[j] = temp;
          }
        }
      }
      this.itemList = sortList;
    })
  }

  //create
  async addItem(newItem: item){
    let timestamp = Date.now().toString();
    newItem = {
      ...newItem,
      id: parseInt(timestamp),
    };
    this.itemList.push(newItem);
    let result = await addDoc(this.itemCollection, newItem);
  }

  // update
    // this.updateItem({
    //   id: 0,
    //   name: "",
    //   price: 0,
    //   inStock: 0,
    //   quantity: 0,
    //   description: "",
    //   image: "",
    //   boxSize: 0
    // })
  async updateItem(item: item){
    let docRef = query(this.itemCollection, where("id","==",item.id))
    let result = await getDocs(docRef);
    let value = result.docs[0].id;
    await updateDoc(doc(this.itemCollection,value),{...item})
  }

  //delete
  async deleteItemByDocID(id: any){
    let docRef = doc(this.firestore,'items',id)
    await deleteDoc(docRef)
  }

  async deleteItemByItemID(id: any){
    let docRef = query(this.itemCollection, where("id","==",parseInt(id)))
    let result = await getDocs(docRef);
    let value = result.docs[0].id;
    let message = await deleteDoc(doc(this.itemCollection,value))
  }
}

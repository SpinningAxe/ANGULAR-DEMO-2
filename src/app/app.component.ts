import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { item } from './model/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('cartElement') cartElement:
    | ElementRef<HTMLDialogElement>
    | undefined;
  openDialog = false;

  title = 'BURY THE LIGHT';

  cart: item[] = [];

  itemList: item[] = [
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

  buyNow(item: any) {
    if (item.inStock == 0) {
      alert('OUT OF STOCK');
      return;
    } else {
      item.inStock -= 1;
    }
    alert(`Tổng tiền là: ${item.price}.000 đ`);
  }

  addStock(item: any) {
    item.inStock++;
    console.log(item.inStock);
  }

  removeStock(item: any) {
    item.inStock--;
    console.log(item.inStock);
  }

  addToCart(item: any) {
    if (item.inStock == 0) {
      alert('OUT OF STOCK');
      return;
    } else {
      item.inStock--;
    }

    let index = this.cart.findIndex((x) => x.id == item.id);
    if (index != -1) {
      this.cart[index].quantity += 1;
      return;
    }
    this.cart.push({ ...item, quantity: 1 });
  }

  removeFromList(item: any) {
    let index = -1;
    index = this.itemList.indexOf(item);

    for (var i = 0; i < this.itemList.length; i++) {
      if (i === index) {
        this.itemList.splice(i, 1);
      }
    }
  }

  checkList() {
    console.log(this.itemList);
  }

  checkCart() {
    console.log(this.cart);
  }

  showDialog() {
    console.log(this.cartElement);
    this.cartElement?.nativeElement.showModal();
  }

  closeDialog() {
    this.cartElement?.nativeElement.close();
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].quantity == 0) {
        this.cart.splice(i, 1);
      }
    }
  }
}

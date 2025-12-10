import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomepageComponent implements OnInit {

  cartCount: number = 0;

  constructor() { }

  ngOnInit(): void { }

  toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
  }

  addToCart() {
    this.cartCount++;
    this.showToast('Produto adicionado à sacola com sucesso!');
  }

  showToast(message: string) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const msgElement = toast.querySelector('p');
    if (msgElement) msgElement.innerText = message;

    toast.classList.remove('translate-x-full');
    setTimeout(() => toast.classList.add('translate-x-full'), 3000);
  }

  onScroll(event: Event) {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    if (window.scrollY > 50) {
      nav.classList.add('shadow-md');
      nav.classList.add('py-0');
    } else {
      nav.classList.remove('shadow-md');
      nav.classList.remove('py-0');
    }
  }
}

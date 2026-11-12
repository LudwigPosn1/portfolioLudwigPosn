import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the mobile menu from the toggle button', () => {
    const toggleButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.menu-toggle');
    const menu: HTMLElement = fixture.nativeElement.querySelector('#navbar-menu');

    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    expect(menu.classList.contains('is-open')).toBe(false);

    toggleButton.click();
    fixture.detectChanges();

    expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
    expect(menu.classList.contains('is-open')).toBe(true);

    toggleButton.click();
    fixture.detectChanges();

    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    expect(menu.classList.contains('is-open')).toBe(false);
  });

  it('should close the menu after selecting a navigation link', () => {
    const toggleButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.menu-toggle');
    toggleButton.click();
    fixture.detectChanges();

    const firstLink: HTMLAnchorElement =
      fixture.nativeElement.querySelector('.nav-link');
    firstLink.click();
    fixture.detectChanges();

    expect(component.isMenuOpen).toBe(false);
    expect(
      fixture.nativeElement.querySelector('#navbar-menu').classList.contains('is-open'),
    ).toBe(false);
  });
});

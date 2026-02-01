import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormationComponent } from './formation.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormationComponent', () => {
  let component: FormationComponent;
  let fixture: ComponentFixture<FormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormationComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FormationComponent);
    component = fixture.componentInstance;

    component.formations = [
      { img: 'assets/images/formations/bg.jpg', title: 'formation.atpl', desc: 'formation.atpl_desc', duree: '12 mois', parcoursLink: '/program-pilote', admissionLink: '/admission', showParcoursBtn: true },
      { img: 'assets/images/formations/ate.jpeg', title: 'formation.ato', desc: 'formation.ato_desc', duree: '12 mois', admissionLink: '/admission' }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render formation cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(component.formations.length);
  });

  it('should show image and title correctly', () => {
    const card = fixture.debugElement.query(By.css('.card'));
    const img = card.nativeElement.querySelector('img');
    const title = card.nativeElement.querySelector('.card-title');
    expect(img.src).toContain(component.formations[0].img);
    expect(title.textContent).toContain(component.formations[0].title);
  });
});

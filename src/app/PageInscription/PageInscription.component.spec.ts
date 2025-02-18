import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInscriptionComponent } from './PageInscription.component';

describe('PageInscriptionComponent', () => {
  let component: PageInscriptionComponent;
  let fixture: ComponentFixture<PageInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculatedPage } from './calculated.page';

describe('CalculatedPage', () => {
  let component: CalculatedPage;
  let fixture: ComponentFixture<CalculatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

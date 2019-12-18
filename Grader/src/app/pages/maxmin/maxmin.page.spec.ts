import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaxminPage } from './maxmin.page';

describe('MaxminPage', () => {
  let component: MaxminPage;
  let fixture: ComponentFixture<MaxminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaxminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

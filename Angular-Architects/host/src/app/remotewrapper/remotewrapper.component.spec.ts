import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotewrapperComponent } from './remotewrapper.component';

describe('RemotewrapperComponent', () => {
  let component: RemotewrapperComponent;
  let fixture: ComponentFixture<RemotewrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemotewrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemotewrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

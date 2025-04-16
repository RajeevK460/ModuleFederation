import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRemoteComponent } from './banner-remote.component';

describe('BannerRemoteComponent', () => {
  let component: BannerRemoteComponent;
  let fixture: ComponentFixture<BannerRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerRemoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

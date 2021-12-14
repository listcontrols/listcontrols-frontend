import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home-page-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/vendors/material.module';
import { SearchFieldModule } from '../../components/search-field/search-field.module';
import {FilterPanelModule} from '../../components/filter-panel/filter-panel.module';

@NgModule({
  declarations: [HomePageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(HOME_ROUTES),
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        SearchFieldModule,
        FilterPanelModule,
    ],
  exports: [],
})
export class HomePageModule {}

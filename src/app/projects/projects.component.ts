import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeImage: string | null = null;
  activeModal: string | null = null;

  openImage(project: string) {
    this.activeImage = project;
  }

  closeImage() {
    this.activeImage = null;
  }

  openModal(project: string) {
    this.activeModal = project;
  }

  closeModal() {
    this.activeModal = null;
  }
}

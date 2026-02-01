import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ProgramService } from '../services/program.service';
import { AdmissionService } from 'src/app/services/admission.service';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'app-admission-polytechnique',
  templateUrl: './admission-polytechnique.component.html',
  styleUrls: ['./admission-polytechnique.component.scss']
})
export class AdmissionPolytechniqueComponent implements OnInit {

  admissionForm!: FormGroup;

  programs: any[] = [];
  dateComp: any[] = [];
  nEtude: any[] = [];

  loading = false;
  successMessage = false;
  admissionConfirmation = false;

  constructor(
    private fb: FormBuilder,
    private admissionService: AdmissionService,
    private title: Title,
    private programService: ProgramService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('IFP POLYTECHNIQUE - Admission En Ligne');

    // Récupération des programmes et données pour les selects
    this.programs = this.programService.programs;
    this.buildForm();

    this.programService.getDateCompetitions().subscribe(d => this.dateComp = d);
    this.programService.getNEtude().subscribe(n => this.nEtude = n);
  }

  buildForm(): void {
    this.admissionForm = this.fb.group({
      program: [this.programs[0]?.name || '', Validators.required],
      concours: ['', Validators.required],
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      ville: ['', Validators.required],
      sexe: ['F', Validators.required],
      age: ['', Validators.required],
      diplome: ['', Validators.required],
      center: ['Yaoundé - Mballa 2', Validators.required],
      cF: [false, Validators.requiredTrue]
    });
  }

  submitAdmission(): void {
    if (this.admissionForm.invalid) return;

    this.loading = true;

    // Prépare le payload exact pour le backend
    const payload = {
      ...this.admissionForm.value,
      dateCreation: new Date().toISOString() // ISO format pour backend
    };

    // Appel au backend via le service
    this.admissionService.addAdmission(payload).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = true;
        this.admissionConfirmation = true;

        // Réinitialiser le formulaire après succès
        this.admissionForm.reset();
        // Remet le sexe et centre par défaut après reset
        this.admissionForm.patchValue({ sexe: 'F', center: 'Yaoundé - Mballa 2', cF: false });

        // Masquer le message après 5 secondes
        setTimeout(() => this.successMessage = false, 5000);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erreur soumission formulaire :', err);
        alert('Erreur lors de l’envoi du formulaire. Veuillez réessayer plus tard.');
      }
    });
  }
}

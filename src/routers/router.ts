import express from 'express';

import * as contactsController from '../controllers/contacts';
import * as companiesController from '../controllers/companies';

export const router = express.Router();

router.get('/contacts', contactsController.getAll);
router.post('/contacts', contactsController.addContact);
router.delete('/contacts/:id', contactsController.removeContact);
router.patch('/contacts/:id', contactsController.editContact);

router.get('/companies', companiesController.getAll);
router.post('/companies', companiesController.addCompany);
router.delete('/companies/:id', companiesController.removeCompany);
router.patch('/companies/:id', companiesController.editCompany);

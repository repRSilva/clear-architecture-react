import { atom } from 'recoil'
import { LoadSurveyList } from '@/domain/usecases'

export const SurveyListState = atom({
  key: 'surveyListState',
  default: {
    surveys: [] as LoadSurveyList.Model[],
    error: '',
    reload: false
  }
})

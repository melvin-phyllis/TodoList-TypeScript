export type Listype = {
  title: string,
  description: string,
  date: Date,
  status: string
}

export type ListePropstype = {

  List: Listype[],

  setList?: React.Dispatch<React.SetStateAction<Listype[]>>
}
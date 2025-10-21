import { useState } from "react"
import type { ListePropstype, Listype } from "../types"

const AddListe = ({ List, setList }: ListePropstype) => {


  const [forminput, setforminput] = useState<Listype>({
    title: "",
    description: "",
    date: new Date(),
    status: ""
  })

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

    const { name, value } = e.target

    setforminput(prev => ({
      ...prev, [name]: value
    }))
  }

  const Submitform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setList!([...List, forminput])
  }

  return (
    <>
      <div className="hero bg-base-200 min-h-200">
        <div className="hero-content flex-col ">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="flex flex-col" onSubmit={(e) => Submitform(e)}>
                <label className="label">
                  <span className="label-text text-xl font-medium">Title</span>
                </label>

                <input
                  type="text"
                  className="input input-bordered input-lg text-lg"
                  name="title"
                  placeholder="title"
                  onChange={(e) => HandleChange(e)}
                />

                <label className="label">
                  <span className="label-text text-xl font-medium">Description</span>
                </label>

                <textarea
                  name="description"
                  id="label"
                  className="textarea textarea-bordered textarea-lg text-lg"
                  onChange={(e) => HandleChange(e)}
                ></textarea>

                <label className="label">
                  <span className="label-text text-xl font-medium">Time</span>
                </label>

                <input
                  type="date"
                  className="input input-bordered input-lg text-lg"
                  name="date"
                  onChange={(e) => HandleChange(e)}
                />

                <button type="submit" className="btn btn-neutral btn-lg mt-4 text-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddListe
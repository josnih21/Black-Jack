import * as React from "react"

type FormProps = {
    title?: string,
    paragraph?: string
  }
  
  export const Form = ({ title, paragraph }: FormProps) => <aside>
    <form>
    <label>
        {title}:
        <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
    </form>
  </aside>
  
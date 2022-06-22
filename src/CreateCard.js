//import { useNavigate } from "@tanstack/react-location"
import { useNavigate } from "react-location"


export default function CreateCard ({formData, setFormData}){
    const navigate = useNavigate();
        
         const handleClick = (e) => {
            e.preventDefault();
            navigate({to:"showcase", replace:true, search:formData})

         }

         const handleChange = (e) => {
            let isChecked = e.target.checked;
            console.log(e.target.checked);
            setFormData({ ...formData, [e.target.value]: isChecked });
          };
        

    return (
        <form>
            <input type = "text"
            name="fullname"
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value})
                }
            />
           <input
            type="text"
            name="aboutme"
            placeholder="What do you like"
            onChange={(e) => setFormData({ ...formData, aboutMe: e.target.value})
                }
            />

        <div>
          <label className="myLabel">
            <input
              type="checkbox"
              value="HTML" onClick={(e) => handleChange(e)} />
            HTML
          </label>
          <label className="myLabel">
            <input type="checkbox" 
            value="CSS" onClick={(e) => handleChange(e)} />
            CSS
          </label>
          <label className="myLabel">
            <input
              type="checkbox"
              value="JS"
              onClick={(e) => handleChange(e)}
            />
            JS
          </label>
          <label className="myLabel">
            <input
              type="checkbox"
              value="Git"
              onClick={(e) => handleChange(e)}
            />
            Git
          </label>
          <label className="myLabel">
            <input
              type="checkbox"
              value="React"
              onClick={(e) => handleChange(e)}
            />
            React
          </label>
          <label className="myLabel">
            <input
              type="checkbox"
              value="NodeJS"
              onClick={(e) => handleChange(e)}
            />
            Node.JS
          </label>
        </div> 
        <div className="input-container name">
          <input
            type="text"
            name="githubURL"
            placeholder="Github URL"
            onClick={(e) =>
              setFormData({ ...formData, githubURL: e.target.value })
            }
          />
        </div>
        <div className="input-container name">
          <input
            type="text"
            name="twitterURL"
            placeholder="Twitter URL"
            onChange={(e) =>
              setFormData({ ...formData, twitterURL: e.target.value })
            }
          />
        </div>
        <div className="input-container name">
          <input
            type="text"
            name="favouriteBooks"
            placeholder="Favourite Books"
            onChange={(e) =>
              setFormData({ ...formData, favouriteBooks: e.target.value })
            }
          />
        </div>
   

            <button onClick={handleClick} type="submit">Submit</button>
         </form>
         
        );

}
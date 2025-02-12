import React, {useState } from 'react';
import axios from "axios";
import "../styles/Comment.css";

function Comment() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const commentTitle1 = "İsim-Soyisim";
    const commentTitle2 = "Soru/Yorum";
    const commentTitle3 = "Kaydet";

    const handleSubmit = async (e) => {
        if (name.length > 30 || text.length > 300) {
            alert("İsim alanı çok uzun");
            return;
        }
        if(name.length < 5 || text.length < 5) {
            alert("İsim alanı çok kısa");
            return;
        }
        e.preventDefault();
        if (name && text) {
            const date = new Date().toLocaleDateString('en-GB');
            const newComment = {
                name,
                text,
                date
            } 
            try {
                const response = await axios.post("/serversavecomment", newComment)
                alert(response.data.message);
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    alert("Yeni yorum için biraz bekleyiniz.");
                } else {
                    alert("Yorum kaydedilirken hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
                } 
            } finally {
                setName("");
                setText("");
            }
        } else {
            alert("Bütün alanları doldurunuz.");
        } 
    }
    return (
        <div className="comment-container">
            <form className="comment-form" onSubmit={handleSubmit}> 
                <div className="form-group">
                    <input type='text' id='name' required maxLength={30} 
                        value={name} placeholder={commentTitle1}
                        onChange={ (e) => setName(e.target.value)} aria-label="İsim soyisim" />
                </div>
                <div className="form-group">
                    <textarea type='text' id='text' required maxLength={300}
                        value={text} placeholder={commentTitle2}
                        onChange={ (e) => setText(e.target.value)} aria-label="Soru veya yorumlarınız" > 
                    </textarea>
                </div>
                <button type='submit' aria-label={commentTitle3}>{commentTitle3}</button>
            </form>
        </div>
    )
}

export default Comment;

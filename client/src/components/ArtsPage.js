import React from 'react'


function Arts() {
    return (
        <div className="page-container">
            <br />
            <h4>Arts stream offers numerous career options and opportunities to students. It is a very traditional stream. There are many misconceptions regarding this stream. There exists many challenging subjects in this stream too, and it takes certain aptitude to perform well in its exams too!</h4><br /><br />
            <p>
                <a class="btn1" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Career and Subjects</a>
                <a class="btn1" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                After 12th</a>
            </p>

            <div class="collapse" id="collapseExample">
                <div class="cardd card-body">
                <strong>Further studies after 10th</strong><br />
                        i. 11th<br />ii.12th<br />iii.Courses<br/>
                   
                   <strong> Subjects for Students after 10th</strong><br />i. History<br />ii. Geography<br />iii. Media Studies<br />iv. Mathematics<br />v. Home Science<br /><br /><strong>Optional Subjects</strong><br/> i. English<br />ii. Graphics <br/>
                </div>
            </div>
            <div class="collapse" id="collapseExample1">
                <div class="cardd card-body">
                <strong>Career after 12th:</strong><br />
                i. Diploma in Fine Arts<br />ii. Diploma in Commercial Art<br />iii. Diploma in Hotel Management<br />iv. Diploma in Fashion Designing<br />v. Diploma in Event Management<br /><br />
                    <strong>Students can opt for:</strong><br />
                    i. Bachelors of Arts<br />
                    ii. Bachelors of fine arts (B.F.A)<br />
                    iii. Bachelors in Fashion Designing<br />
                    iv. Bachelors of Hotel Management<br />
                    v. Sociology
                </div>
            </div>
        </div>
    )
}

export default Arts
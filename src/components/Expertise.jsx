import React, { useEffect, useState, useRef } from 'react'

import pythonI from '../assets/icons/python1.jpg'
import fastapiI from '../assets/icons/fastapi1.jpg'
import langchainI from '../assets/icons/langchain1.jpg'
import autogenI from '../assets/icons/autogen1.jpg'
import gitI from '../assets/icons/Github.jpg'
import dockerI from '../assets/icons/Docker1.jpg'
import reactI from '../assets/icons/react.jpg'
import k8sI from '../assets/icons/kubernaties.jpg'
import jsI from '../assets/icons/javascript.jpg'
import htmlI from '../assets/icons/html1.jpg'
import cssI from '../assets/icons/css1.jpg'
import nodeI from '../assets/icons/Nodejs1.jpg'
import mongoI from '../assets/icons/Mongodb1.jpg'
import mysqlI from '../assets/icons/Mysql1.jpg'
import tailwindI from '../assets/icons/Tailwind1.jpg'
import chromaI from '../assets/icons/CosmosdB1.jpg'

const ITEMS = [
  {name:'Python', icon: pythonI},
  {name:'FastAPI', icon: fastapiI},
  {name:'LangChain', icon: langchainI},
  {name:'AutoGen', icon: autogenI},
  {name:'ChromaDB', icon: chromaI},
  {name:'MySQL', icon: mysqlI},
  {name:'MongoDB', icon: mongoI},
  {name:'GitHub', icon: gitI},
  {name:'React', icon: reactI},
  {name:'Kubernetes', icon: k8sI},
  {name:'Docker', icon: dockerI},
  {name:'JavaScript', icon: jsI},
  {name:'HTML', icon: htmlI},
  {name:'CSS', icon: cssI},
  {name:'Node.js', icon: nodeI},
  {name:'Tailwind', icon: tailwindI},
]

export default function Expertise(){
  const containerRef = useRef(null)
  const [visibleRows, setVisibleRows] = useState(0)
  const cols = 5

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const rows = Math.ceil(ITEMS.length / cols)
    let timer = null

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // reveal rows one-by-one with small delay
          let i = 0
          setVisibleRows(0)
          timer = setInterval(() => {
            i += 1
            setVisibleRows(i)
            if (i >= rows) {
              clearInterval(timer)
            }
          }, 350)
        } else {
          // when leaving, hide rows so it can replay
          setVisibleRows(0)
        }
      })
    }, { threshold: 0.25 })

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer) clearInterval(timer)
    }
  }, [])

  const rows = []
  for (let r=0;r<Math.ceil(ITEMS.length/cols);r++){
    rows.push(ITEMS.slice(r*cols, r*cols+cols))
  }

  return (
    <div className="expertise-root section-card" id="expertise" data-section="expertise" ref={containerRef}>
      <div className="container">
        <div style={{gridColumn:'1 / -1'}}>
          <h2>My Tech Stack</h2>
          
        </div>

        <div className="expertise-grid" style={{gridColumn:'1 / -1'}}>
          {rows.map((row, idx) => (
            <div key={idx} className={"expertise-row " + (visibleRows > idx ? 'visible' : '')} data-row-index={idx}>
              {row.map((it) => (
                  <div key={it.name} className="tech-card">
                    <div className="tech-icon" aria-hidden>
                      <img src={it.icon} alt={it.name} className="tech-icon-img" />
                    </div>
                    <div className="tech-label">{it.name}</div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

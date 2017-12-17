﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mls_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Estate")]
    public class EstateController : Controller
    {
        readonly MLSContext context;

        public EstateController (MLSContext context)
        {
            this.context = context;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Models.Estate> Get()
        {
            return context.Property;
            
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Estate property)
        {
            context.Property.Add(property);
            await context.SaveChangesAsync();
            return Ok(property);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Estate property)
        {
            if (id != property.ID)
                return BadRequest();

            context.Entry(property).State = EntityState.Modified;

            await context.SaveChangesAsync();

            return Ok(property);
        }
    }
}
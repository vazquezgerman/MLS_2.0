using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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
        [Authorize]
        [HttpGet]
        public IEnumerable<Models.Estate> Get()
        {
            var userId = HttpContext.User.Claims.First().Value;

            return context.Estate.Where(e => e.OwnerId == userId);
            
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Estate estate)
        {
            var userId = HttpContext.User.Claims.First().Value;

            estate.OwnerId = userId;

            context.Estate.Add(estate);
            await context.SaveChangesAsync();
            return Ok(estate);
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
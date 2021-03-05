using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using dgware_test.Models;

namespace dgware_test.Controllers
{
    public class TradersController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Traders
        public IQueryable<Trader> GetTrader()
        {
            return db.Trader;
        }

        //// GET: api/Traders/5
        //[ResponseType(typeof(Trader))]
        //public IHttpActionResult GetTrader(int id)
        //{
        //    Trader trader = db.Trader.Find(id);
        //    if (trader == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(trader);
        //}

        //// PUT: api/Traders/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutTrader(int id, Trader trader)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != trader.TraderID)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(trader).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!TraderExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Traders
        //[ResponseType(typeof(Trader))]
        //public IHttpActionResult PostTrader(Trader trader)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Trader.Add(trader);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = trader.TraderID }, trader);
        //}

        //// DELETE: api/Traders/5
        //[ResponseType(typeof(Trader))]
        //public IHttpActionResult DeleteTrader(int id)
        //{
        //    Trader trader = db.Trader.Find(id);
        //    if (trader == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Trader.Remove(trader);
        //    db.SaveChanges();

        //    return Ok(trader);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        //private bool TraderExists(int id)
        //{
        //    return db.Trader.Count(e => e.TraderID == id) > 0;
        //}
    }
}
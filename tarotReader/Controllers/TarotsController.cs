using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace tarotReader_MVC.Controllers
{
    public class TarotsController : Controller
    {
        private readonly MvcTarotsContext _context;

        public TarotsController(MvcTarotsContext context)
        {
            _context = context;
        }

        // GET: Tarots
        public async Task<ActionResult<List<Tarots>>> Index()
        {
            var model = await _context.Tarots.ToListAsync();
            return model;

        }

         [HttpGet("/api/{id}")]

        // GET: Tarots/Details/5
        public async Task<ActionResult<Tarots?>> Details(int? id)
        {
            if (id == null || _context.Tarots == null)
            {
                return NotFound();
            }

            var tarots = await _context.Tarots
                .FirstOrDefaultAsync(m => m.TarotId == id);
            if (tarots == null)
            {
                return NotFound();
            }

            return tarots;
        }


        // GET: Tarots/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Tarots/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("TarotId,TarotName,TarotDescription,TarotLove,TarotCareer,TarotWealth")] Tarots tarots)
        {
            if (ModelState.IsValid)
            {
                _context.Add(tarots);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(tarots);
        }

        // GET: Tarots/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Tarots == null)
            {
                return NotFound();
            }

            var tarots = await _context.Tarots.FindAsync(id);
            if (tarots == null)
            {
                return NotFound();
            }
            return View(tarots);
        }

        // POST: Tarots/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("TarotId,TarotName,TarotDescription,TarotLove,TarotCareer,TarotWealth")] Tarots tarots)
        {
            if (id != tarots.TarotId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(tarots);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TarotsExists(tarots.TarotId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(tarots);
        }

        // GET: Tarots/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Tarots == null)
            {
                return NotFound();
            }

            var tarots = await _context.Tarots
                .FirstOrDefaultAsync(m => m.TarotId == id);
            if (tarots == null)
            {
                return NotFound();
            }

            return View(tarots);
        }

        // POST: Tarots/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Tarots == null)
            {
                return Problem("Entity set 'MvcTarotsContext.Tarots'  is null.");
            }
            var tarots = await _context.Tarots.FindAsync(id);
            if (tarots != null)
            {
                _context.Tarots.Remove(tarots);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TarotsExists(int id)
        {
          return (_context.Tarots?.Any(e => e.TarotId == id)).GetValueOrDefault();
        }
    }
}

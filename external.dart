import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(debugShowCheckedModeBanner: false, home: StudyTracker()),
);

class StudyTracker extends StatefulWidget {
  @override
  State<StudyTracker> createState() => _StudyTrackerState();
}

class _StudyTrackerState extends State<StudyTracker> {
  int total = 5, completed = 0;
  bool started = false;
  final c = TextEditingController(text: '5');

  void startTracking() {
    int? n = int.tryParse(c.text);
    if (n != null && n > 0) {
      setState(() {
        total = n;
        completed = 0;
        started = true;
      });
    } else {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text('Enter a valid number!')));
    }
  }

  void resetTracker() => setState(() {
    total = 5;
    completed = 0;
    started = false;
    c.text = '5';
  });

  @override
  void dispose() {
    c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Study Tracker'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.menu_book, size: 60, color: Colors.blue),
              Text(
                'Set Your Study Goal',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              TextField(
                controller: c,
                keyboardType: TextInputType.number,
                enabled: !started,
                decoration: InputDecoration(
                  labelText: 'Total Study Sessions',
                  border: OutlineInputBorder(),
                ),
              ),
              if (!started)
                ElevatedButton(
                  onPressed: startTracking,
                  child: Text('Start Tracking'),
                ),
              if (started) ...[
                Text('Completed: $completed'),
                Text('Remaining: ${total - completed}'),
                ElevatedButton(
                  onPressed: completed < total
                      ? () => setState(() => completed++)
                      : null,
                  child: Text(
                    completed < total ? 'Complete Session' : 'Goal Completed!',
                  ),
                ),
                ElevatedButton(
                  onPressed: resetTracker,
                  child: Text('Reset Tracker'),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

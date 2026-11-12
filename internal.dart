
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: StudyTracker(),
  ));
}

class StudyTracker extends StatefulWidget {
  @override
  State<StudyTracker> createState() => _StudyTrackerState();
}

class _StudyTrackerState extends State<StudyTracker> {
  int total = 5, completed = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Study Tracker'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.menu_book, size: 60, color: Colors.blue),
            SizedBox(height: 20),

            Text('Study Session Tracker',
                style: TextStyle(fontSize: 22)),

            Text('Total Sessions: $total'),
            Text('Completed Sessions: $completed'),
            Text('Remaining Sessions: ${total - completed}'),

            SizedBox(height: 20),

            ElevatedButton(
              onPressed: completed < total
                  ? () {
                      setState(() {
                        completed++;
                      });
                    }
                  : null,
              child: Text('Complete Session'),
            ),

            if (completed == total)
              Text('Goal Completed!',
                  style: TextStyle(color: Colors.green)),
          ],
        ),
      ),
    );
  }
}
